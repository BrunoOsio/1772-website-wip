import { First } from "@/shared/components/first/First";
import { Mission } from "@/shared/components/mission/Mission";
import { TeamDescription } from "@/shared/components/teamDescription/TeamDescription";

export default function Home() {
  return (
    <>
      <Mission/>
      <TeamDescription/>
      <First/>
    </>
  )
}
