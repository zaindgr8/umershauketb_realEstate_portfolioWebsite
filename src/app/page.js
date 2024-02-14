import Layout from "@/components/Layout";
import TopSection from "./umerb/TopSection";
import SecondSection from "./umerb/thirdsection";
import ThirdSection from "@/components/magnific-pop-up-gallery";
import Testimonial from "./umerb/Testimonial";
import Blogsection from "./umerb/blogsection";
import Team from "./umerb/team";
import TeamCorousal from "@/components/corouselTeam";

export default function HomeTwo() {
  return (
    <Layout>
      <main>
        <>
          <TopSection />
          <SecondSection />
          <div className="px-2">
            <ThirdSection />
          </div>
          <Testimonial />
          <Blogsection />
          <Team />
          <div className="p-3 mb-3">
            <TeamCorousal />
          </div>
        </>
      </main>
    </Layout>
  );
}


