import { useEffect, useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import numberToWords from "number-to-words";
// import scrollIntoView from "scroll-into-view";1

import Volume from "../../components/Volume/Volume";

import Embed from "../../components/Embed/Embed";
import Decoration from "../../components/Decoration/Decoration";

import Image from "../../components/Image/Image";
import Video from "../../components/Video/Video";

import volume3TitleVideo from "/video/volume_3_title_video.mp4";

import { VOLUME_READ_OBSERVER_DELAY } from "../../helpers/variables";
import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 3;

const VolumeThree = ({
  language,
  handleChangeCurrentVolumeNumber,
  handleAddReadVolume,
  readVolumes,
}) => {
  const [isVolumeRead, setIsVolumeRead] = useState();
  const [isiPhone, setIsiPhone] = useState(false);

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  useEffect(() => {
    if (isVolumeRead === false)
      // scrollIntoView(volumeTitle.current, { time: 1200, align: { top: 0.4 } });
      volumeTitle.current.scrollIntoView();
  }, [isVolumeRead]);

  useEffect(() => {
    document.body.classList.add(
      `volume-${numberToWords.toWords(volumeNumber)}`
    );

    return () => {
      document.body.classList.remove(
        `volume-${numberToWords.toWords(volumeNumber)}`
      );
    };
  });

  useEffect(() => {
    localStorage.setItem("lastVisitedVolume", volumeNumber);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) handleAddReadVolume(volumeNumber);
      },
      { threshold: 1 }
    );

    // observer.observe(lastSection.current);
    setTimeout(
      () => observer.observe(lastSection.current),
      VOLUME_READ_OBSERVER_DELAY
    );

    return () => observer.disconnect();
  }, [handleAddReadVolume]);

  useEffect(() => {
    setIsVolumeRead(readVolumes.includes(volumeNumber));
  }, [readVolumes]);

  useEffect(() => {
    handleChangeCurrentVolumeNumber(volumeNumber);
  }, [handleChangeCurrentVolumeNumber]);

  useEffect(() => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setIsiPhone(true);
    }
  }, [isiPhone]);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Three - When I Grow Up I Wanna Be Influential - Influencer marketing and its ups and downs – pros and cons"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Three
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_three-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_three-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_three-mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_four-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_four-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_four-mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_five-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_five-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_five-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume className="volume--three">
        <div
          ref={volumeTitle}
          className="volume__title volume__title--non-reverse volume__title--volume-three"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-video volume__title-video--volume-three"
          >
            {!isiPhone && (
              <Video
                placeholderPath="/images/volumes/volume-three/volume_3_video_title-placeholder.jpg"
                path={volume3TitleVideo}
              />
            )}
            {isiPhone && (
              <Image
                webpPath="/images/volumes/volume-three/volume_3_image_title.webp"
                path="/images/volumes/volume-three/volume_3_image_title.jpg"
                placeholderPath="/images/volumes/volume-three/volume_3_image_title-placeholder.jpg"
                altText="Spotify's Wrapped visual."
              />
            )}
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-three">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                >
                  <g
                    id="Group_10998"
                    data-name="Group 10998"
                    transform="translate(-1351 -846)"
                  >
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="18"
                      cy="18"
                      r="18"
                      transform="translate(1351 846)"
                      fill="#fc631b"
                    />
                    <g
                      id="Group_10997"
                      data-name="Group 10997"
                      transform="translate(-1.101 -2.354)"
                    >
                      <line
                        id="Line_18"
                        data-name="Line 18"
                        x2="5"
                        y2="5"
                        transform="translate(1361.101 868.054)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_19"
                        data-name="Line 19"
                        y1="12.5"
                        x2="12.092"
                        transform="translate(1366.401 860.354)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
                {language === "en-US" ? (
                  <p>You’ve completed this Volume.</p>
                ) : (
                  <p>Završili ste ovaj Volume.</p>
                )}
              </div>
            )}
          </motion.div>
          <div className="volume__title-text volume__title-text--volume-three">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-three"
            >
              Volume 3
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-three">
              <motion.span {...elementsMotionProps}>When I Grow Up</motion.span>
              <motion.span {...elementsMotionProps}>
                I Wanna Be Influential
              </motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-three"
            >
              Influencer marketing and its ups and downs – pros and cons
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-three-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-three"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    And let’s find some influencers... is a phrase said out loud
                    at least once during the pitch process or while creating a
                    new campaign that should create a BOOM effect.
                  </p>
                  <p>
                    Influencers have become an inevitable part of every
                    advertising thought, but are they truly an unavoidable part
                    of every campaign?
                  </p>
                  <p>The short answer? Probably yes.</p>
                </>
              ) : (
                <>
                  <p>
                    I da nađemo neke influensere… je rečenica koju izgovori
                    barem jedna osoba tokom trajanja pitch procesa ili tokom
                    kreiranja nove kampanje koja treba da napravi BOOM.
                  </p>
                  <p>
                    Influenseri su postali neizbežni deo svakog advertajzing
                    razmišljanja, ali da li su zaista neizbežni deo svake
                    kampanje?
                  </p>
                  <p>Ukratko: Verovatno da.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "35rem", height: "35rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-three-section-two">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7008662966941797637"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_1.jpg"
              allowFullScreen={true}
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7278484854684142891"
              title="Tiktok video player"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_2.jpg"
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-three-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-three"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Influencers will impact the reach of posts, bring a large
                    number of followers to social media, and further influence
                    the brand’s recognizability. Especially for a new brand.
                  </p>
                  <p>
                    And even if its not new, they will influence creating a new
                    (better) image of it.
                  </p>
                  <p>It sounds perfect. And often it is perfect.</p>
                  <p>
                    People simply love to hear about their favorite brand first
                    hand from those they like and whose online content they love
                    to watch.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Influenseri će uticati na reach vaših objava, doneti vam
                    veliki broj pratilaca na mrežama i dodatno uticati na
                    prepoznatljivost vašeg brenda. Naročito ako je u pitanju
                    novi brend.
                  </p>
                  <p>
                    A i ako nije novi, uticaće na kreiranje nove (bolje) slike o
                    istom.
                  </p>
                  <p>Zvuči savršeno. I često i jeste savršeno.</p>
                  <p>
                    Ljudi prosto vole da o omiljenom brendu čuju iz “prve ruke”,
                    od onih koji su im simpatični i oni čiji sadržaj na i
                    nternetu obožavaju da gledaju.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "40rem", height: "40rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_2.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-three-section-four">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7299850601234435329"
              title="Tiktok video player"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_3.jpg"
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="instagram"
              src="https://www.instagram.com/p/CnxDtuOJMD2/embed"
              title="Instagram carousel"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_4.jpg"
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-three-section-five">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-three"
            >
              {language === "en-US" ? (
                <>
                  <p>So, where’s the problem?</p>
                  <p>
                    Most often, in the wrong choice. As in a lot of situations.
                    And it doesn’t mean that a particular influencer is wrong.
                    Better said, it doesn’t mean that they are necessarily good
                    or necessarily bad on their own. It means that they are just
                    wrongly associated with a particular brand.
                  </p>
                  <p>That’s where you come in.</p>
                  <p>
                    Research, analyze, connect, and check the competition. Check
                    the last few years. At least a few years. Check the
                    competition of the competition. Check what influencers think
                    about the brand. Check before you propose. Before you base
                    the concept on the influencer. Check what they’ve written.
                    Check what they’ve said.
                  </p>
                </>
              ) : (
                <>
                  <p>Pa, gde onda zapne?</p>
                  <p>
                    Najčešće u pogrešnom izboru. Kao i uvek. I to ne znači da je
                    neki influenser pogrešan. Odnosno, ne znači da je nužno
                    dobar ili nužno loš sam po sebi. To znači da je samo
                    pogrešno povezan sa određenim brendom.
                  </p>
                  <p>E tu nastupate vi.</p>
                  <p>
                    Istražujte, istražujte, analizirajte, povezujte, proverite
                    konkurenciju. U prethodnih nekoliko godina. Bar nekoliko
                    godina. Proverite konkurenciju konkurencije. Proverite šta
                    influenseri misle o brendu. Proverite pre nego što
                    predložite. Pre nego što zasnujete koncept na samom
                    influenseru. Proverite šta je pisao. Proverite šta je
                    pričao.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_3.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-three-section-six">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7214087789543968006"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_5.jpg"
              allowFullScreen={true}
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.instagram.com/p/CnxKp4Eu5oI/embed"
              title="Instagram video player"
              backgroundImage="/images/embed-bg/volume-3/volume_3_embed_6.jpg"
              allowFullScreen={true}
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-three-section-seven"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-three"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    And that might not be enough. Because you never know what
                    might happen. Because they may work diligently, but cancel
                    culture works even more diligently.
                  </p>
                  <p>
                    Because one wrong word is enough for people to start
                    analyzing the behavior of the person you’ve chosen under
                    your brand’s post.
                  </p>
                  <p>Is there a way to prevent this?</p>
                  <p>
                    Not really. Or in the majority of situations, there isn’t.
                    But try to do the best you can
                  </p>
                  <p>Research, research, analyze.</p>
                  <p>And again.</p>
                </>
              ) : (
                <>
                  <p>
                    I to može da bude nedovoljno. Zato što nikada ne znate šta
                    može da se desi. Zato što radi marljivo, ali kensl kultura
                    radi još marljivije.
                  </p>
                  <p>
                    Zato što je jedna pogrešna reč dovoljna da ispod objave
                    vašeg brenda počnu da analiziraju ponašanje osobe koju ste
                    vi sami izabrali.
                  </p>
                  <p>Kako to preduprediti?</p>
                  <p>
                    Nikako. Ili skoro pa nikako. Ali gledajte da bar ono što je
                    do vas uradite na najbolji mogući način.
                  </p>
                  <p>Istražujte, istražujte, analizirajte.</p>
                  <p>Pa opet.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "60rem", height: "60rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_4.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeThree;

{
  /* <div className="volume__content">
          <section className="volume__section volume__section--volume-three volume__section--volume-three-section-one">
            <div>
              <Embed
                type="vertical"
                site="tiktok"
                src="https://www.tiktok.com/embed/7008662966941797637"
                title="Tiktok video player"
                backgroundImage="/images/embed-bg/volume-3/volume_3_embed_1.jpg"
                allowFullScreen={true}
              />
              <Embed
                type="vertical"
                site="tiktok"
                src="https://www.tiktok.com/embed/7278484854684142891"
                title="Tiktok video player"
                allowFullScreen={true}
                backgroundImage="/images/embed-bg/volume-3/volume_3_embed_2.jpg"
              />
              <Decoration
                style={{ width: "40rem", height: "50rem" }}
                path={
                  "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_3.json"
                }
              />
            </div>
            <div>
              <div className="volume__textbox volume__textbox--volume-three">
                {language === "en-US" ? (
                  <>
                    <p>
                      And let’s find some influencers... is a phrase said out
                      loud at least once during the pitch process or while
                      creating a new campaign that should create a BOOM effect.
                    </p>
                    <p>
                      Influencers have become an inevitable part of every
                      advertising thought, but are they truly an unavoidable
                      part of every campaign?
                    </p>
                    <p>The short answer? Probably yes.</p>
                  </>
                ) : (
                  <>
                    <p>
                      I da nađemo neke influensere… je rečenica koju izgovori
                      barem jedna osoba tokom trajanja pitch procesa ili tokom
                      kreiranja nove kampanje koja treba da napravi BOOM.
                    </p>
                    <p>
                      Influenseri su postali neizbežni deo svakog advertajzing
                      razmišljanja, ali da li su zaista neizbežni deo svake
                      kampanje?
                    </p>
                    <p>Ukratko: Verovatno da.</p>
                  </>
                )}
              </div>
              <Embed
                type="vertical"
                site="tiktok"
                src="https://www.tiktok.com/embed/7299850601234435329"
                title="Tiktok video player"
                allowFullScreen={true}
                backgroundImage="/images/embed-bg/volume-3/volume_3_embed_3.jpg"
              />
              <div className="volume__textbox volume__textbox--volume-three">
                {language === "en-US" ? (
                  <>
                    <p>
                      Influencers will impact the reach of posts, bring a large
                      number of followers to social media, and further influence
                      the brand’s recognizability. Especially for a new brand.
                    </p>
                    <p>
                      And even if its not new, they will influence creating a
                      new (better) image of it.
                    </p>
                    <p>It sounds perfect. And often it is perfect.</p>
                    <p>
                      People simply love to hear about their favorite brand
                      first hand from those they like and whose online content
                      they love to watch.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Influenseri će uticati na reach vaših objava, doneti vam
                      veliki broj pratilaca na mrežama i dodatno uticati na
                      prepoznatljivost vašeg brenda. Naročito ako je u pitanju
                      novi brend.
                    </p>
                    <p>
                      A i ako nije novi, uticaće na kreiranje nove (bolje) slike
                      o istom.
                    </p>
                    <p>Zvuči savršeno. I često i jeste savršeno.</p>
                    <p>
                      Ljudi prosto vole da o omiljenom brendu čuju iz “prve
                      ruke”, od onih koji su im simpatični i oni čiji sadržaj na
                      i nternetu obožavaju da gledaju.
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>
          <section className="volume__section volume__section--volume-three volume__section--volume-three-section-two">
            <div>
              <div className="volume__textbox volume__textbox--volume-three">
                {language === "en-US" ? (
                  <>
                    <p>So, where’s the problem?</p>
                    <p>
                      Most often, in the wrong choice. As in a lot of
                      situations. And it doesn’t mean that a particular
                      influencer is wrong. Better said, it doesn’t mean that
                      they are necessarily good or necessarily bad on their own.
                      It means that they are just wrongly associated with a
                      particular brand.
                    </p>
                    <p>That’s where you come in.</p>
                    <p>
                      Research, analyze, connect, and check the competition.
                      Check the last few years. At least a few years. Check the
                      competition of the competition. Check what influencers
                      think about the brand. Check before you propose. Before
                      you base the concept on the influencer. Check what they’ve
                      written. Check what they’ve said.
                    </p>
                    <p>
                      And that might not be enough. Because you never know what
                      might happen. Because they may work diligently, but cancel
                      culture works even more diligently.
                    </p>
                    <p>
                      Because one wrong word is enough for people to start
                      analyzing the behavior of the person you’ve chosen under
                      your brand’s post.
                    </p>
                  </>
                ) : (
                  <>
                    <p>Pa, gde onda zapne?</p>
                    <p>
                      Najčešće u pogrešnom izboru. Kao i uvek. I to ne znači da
                      je neki influenser pogrešan. Odnosno, ne znači da je nužno
                      dobar ili nužno loš sam po sebi. To znači da je samo
                      pogrešno povezan sa određenim brendom.
                    </p>
                    <p>E tu nastupate vi.</p>
                    <p>
                      Istražujte, istražujte, analizirajte, povezujte, proverite
                      konkurenciju. U prethodnih nekoliko godina. Bar nekoliko
                      godina. Proverite konkurenciju konkurencije. Proverite šta
                      influenseri misle o brendu. Proverite pre nego što
                      predložite. Pre nego što zasnujete koncept na samom
                      influenseru. Proverite šta je pisao. Proverite šta je
                      pričao.
                    </p>
                    <p>
                      I to može da bude nedovoljno. Zato što nikada ne znate šta
                      može da se desi. Zato što radi marljivo, ali kensl kultura
                      radi još marljivije.
                    </p>
                    <p>
                      Zato što je jedna pogrešna reč dovoljna da ispod objave
                      vašeg brenda počnu da analiziraju ponašanje osobe koju ste
                      vi sami izabrali.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div>
              <Embed
                type="vertical"
                site="instagram"
                src="https://www.instagram.com/p/CnxDtuOJMD2/embed"
                title="Instagram carousel"
                allowFullScreen={true}
                backgroundImage="/images/embed-bg/volume-3/volume_3_embed_4.jpg"
              />
              <Decoration
                style={{ width: "40rem", height: "40rem" }}
                path={
                  "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_1.json"
                }
              />
            </div>
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--volume-three volume__section--volume-three-section-three"
          >
            <div>
              <Decoration
                style={{ width: "36rem", height: "36rem" }}
                path={
                  "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_3_deco_2.json"
                }
              />
            </div>
            <div>
              <div className="volume__textbox volume__textbox--volume-three">
                {language === "en-US" ? (
                  <>
                    <p>Is there a way to prevent this?</p>
                    <p>
                      Not really. Or in the majority of situations, there isn’t.
                      But try to do the best you can
                    </p>
                    <p>Research, research, analyze.</p>
                    <p>And again.</p>
                  </>
                ) : (
                  <>
                    <p>Kako to preduprediti?</p>
                    <p>
                      Nikako. Ili skoro pa nikako. Ali gledajte da bar ono što
                      je do vas uradite na najbolji mogući način.
                    </p>
                    <p>Istražujte, istražujte, analizirajte.</p>
                    <p>Pa opet.</p>
                  </>
                )}
              </div>
            </div>
          </section>
        </div> */
}
