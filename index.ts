import { Prisma } from "./src/prisma";
import { appSecret, endpoint } from "./src/utils";
import { getCurrentRound, getTeamScores } from "./src/api/cartola";
import { differenceBy } from "lodash";

const prisma = new Prisma({
  endpoint,
  secret: appSecret
});

const main = async () => {
  const currentRound = await getCurrentRound();
  const [currentSeason] = await prisma.query.seasons({ where: { current: true } });

  const teams = await prisma.query.teams(
    { where: { scores_none: { AND: { round_not: currentRound, season: { id_not: currentSeason.id } } } } },
    `{ cartolaSlug, id, scores(where: { season: { name: "${currentSeason.name}"} }) { round } }`
  );

  for (const { cartolaSlug, id, scores } of teams) {
    const cartolaScores = await getTeamScores(cartolaSlug);
    const missingRounds = differenceBy(cartolaScores, scores, "round");

    await prisma.mutation.updateTeam({ where: { id }, data: { scores: { create: missingRounds.map(r => ({ ...r, season: { connect: { id: currentSeason.id } } })) } } });
  }

  if (currentSeason.currentRound !== currentRound) {
    await prisma.mutation.updateSeason({ where: { id: currentSeason.id }, data: { currentRound } });
  }
};

main();
