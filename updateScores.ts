import { Prisma } from "./src/prisma";
import { appSecret, endpoint } from "./src/utils";
import { getCurrentRound, getTeamScores } from "./src/api/cartola";
import { differenceBy } from "lodash";

const main = async () => {
  const prisma = new Prisma({
    endpoint,
    secret: appSecret
  });

  const currentRound = await getCurrentRound();

  if (!currentRound) {
    return;
  }

  console.info(`LAST CLOSED ROUND: ${currentRound}`);

  const [currentSeason] = await prisma.query.seasons({ where: { current: true } });

  console.info(`CURRENT SEASON: ${currentSeason.name}`);

  const teams = await prisma.query.teams(
    { where: { scores_none: { AND: { round: currentRound, season: { id: currentSeason.id } } } } },
    `{ cartolaId, id, scores(where: { season: { id: "${currentSeason.id}"} }) { round } }`
  );

  console.info(`TEAMS TO UPDATE: ${teams.length}`);

  for (const { cartolaId, id, scores } of teams) {

    const cartolaScores = await getTeamScores(cartolaId);
    const missingRounds = differenceBy(cartolaScores, scores, "round");

    await prisma.mutation.updateTeam({
      where: { id },
      data: {
        scores: {
          create: missingRounds.map(r => ({ ...r, season: { connect: { id: currentSeason.id } } }))
        }
      }
    });
  }



  if (currentSeason.currentRound !== currentRound) {
    await prisma.mutation.updateSeason({ where: { id: currentSeason.id }, data: { currentRound } });
  }
};

main().catch(err => console.error(err));
