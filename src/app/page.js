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
import Testimonial from "../data/testimonial.json";
import TopSection from "./umerb/TopSection";

export default function HomeTwo() {
  return (
    <Layout>
      <main>
        <>
          <TopSection />
          <ProfileCard />
        </>
      </main>
    </Layout>
  );
}


