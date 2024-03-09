import { RewardHistory } from "../../models/RewardHistory";

export const getUserBalance = (
  id: string
): Promise<{ p5_points: number; reward_points: number }> => {
  return new Promise<{ p5_points: number; reward_points: number }>(
    async (resolve, reject) => {
      try {
        const sentTransactions = await RewardHistory.find({ given_by: id });
        let totalSentPoints = 0;
        sentTransactions.forEach((x) => {
          totalSentPoints += x.points;
        });
        const p5_points = 100 - totalSentPoints;

        const receivedTransactions = await RewardHistory.find({ given_to: id });
        let reward_points = 0;
        receivedTransactions.forEach((x) => {
          reward_points += x.points;
        });

        resolve({ p5_points, reward_points });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    }
  );
};
