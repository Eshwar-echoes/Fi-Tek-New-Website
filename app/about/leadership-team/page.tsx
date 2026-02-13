
import { PageHero } from "@/components/sections/PageHero";
import { TeamLeadershipSection } from "@/components/sections/TeamLeadershipSection";
import { TeamManagementSection } from "@/components/sections/TeamManagementSection";
import { team } from "@/content/client/fitek/about/team";

export default function TeamPage() {
  return (
    <>
      <PageHero
        title={team.hero.title}
        subtitle={team.hero.subtitle}
        backgroundImage={team.hero.backgroundImage}
      />
      <TeamLeadershipSection members={team.leadership} />
      <TeamManagementSection members={team.management} />
    </>
  );
}
