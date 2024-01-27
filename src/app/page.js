import Header from "@/components/Header";
import Carousel from "@/components/corousel";
import FooterWhite from "@/components/footer-white";
import Dropdown from "@/components/form-control-two";
import Link from "next/link";
import Firstsection from "./umerb/firstsection";
import ProfileCard from "@/components/feature-properties";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/section-header";
import Regions from "@/components/Regions";
import TopSection from "./umerb/TopSection";
import SecondSection from "./umerb/thirdsection";
import ThirdSection from "@/components/magnific-pop-up-gallery";
import Testimonial from "./umerb/Testimonial";
import Blogsection from "./umerb/blogsection";
import Team from "./umerb/team";


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
        </>
      </main>
    </Layout>
  );
}


