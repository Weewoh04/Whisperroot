import BestiaryExperience from "@/components/BestiaryExperience";
import { bestiaryCreatures } from "@/data/bestiaryData";

export default function CreaturesPage() {
  return <BestiaryExperience creatures={bestiaryCreatures} />;
}
