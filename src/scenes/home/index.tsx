import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMedia";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
      <section id="home" className="gap-16 mt-64 bg-gray-20 py-10 md:h-full md:pb-0">
       {/* Image and Main Header */}
       <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main Header */}
        <div className="z-10 mt-96 md:basis-3/5">
            {/* Headings */}
            <div className="md:-mt-20">
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
                </div>
                <p className="mt-8 text-sm">
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you dream of. Get your Dream Body now. 
                </p>
            </div>

            {/* Actions  */}
            <div className="mt-8 flex items-center gap-8 md:justify-start">
                <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
                </ActionButton>
                <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </div>

        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
       </div>
       {/* SPONSORS */}
        {
            isAboveMediumScreens && (
                <div>
                    <div>
                        <div>
                            <img src={SponsorRedBull} alt="sponsor-red-bull" />
                            <img src={SponsorForbes} alt="sponsor-forbes" />
                            <img src={SponsorFortune} alt="sponsor-fortune" />
                        </div>
                    </div>

                </div>
            )
        }
        </section>
  )
}

export default Home;