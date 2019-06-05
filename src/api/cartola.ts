import { range } from "lodash";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://api.cartolafc.globo.com/" });

export async function getCurrentRound(): Promise<number | null> {
  try {
    const { data } = await axiosInstance.get("mercado/status");
    const { rodada_atual: currentRound, status_mercado: isOpen } = data;

    return isOpen ? currentRound - 1 : currentRound;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getTeamScores(teamId: string): Promise<Array<{ round: number; score: number } | null>> {
  const round = await getCurrentRound();

  const scores = await Promise.all(
    range(1, round + 1).map(async (round: number) => {
      const { data } = await axiosInstance.get(`time/id/${teamId}/${round}`);
      const { pontos } = data;

      return pontos ? { round, score: pontos } : null;
    })
  );

  return scores.filter(s => s !== null);
}
