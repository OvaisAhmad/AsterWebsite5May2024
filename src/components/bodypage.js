import { useTranslation } from "next-i18next";
import Link from "next/link";


const BodyPage = () => {

  const { t } = useTranslation("");
  return (
    <div className="sitefont topbar_wrapper relative w-full py-0 px-[5px] box-border
     items-center justify-center gap-[75px] text-start text-37xl text-aster-blue
      font-paragraph-01 lg:ps-8 lg:pe-8 lg:box-border md:ps-8 md:pe-8 md:box-border
       sm:ps-4 sm:pe-4 sm:box-border">
      <div className="hidden flex flex-row items-center justify-center gap-[75px] md:flex-col md:items-start md:justify-center" style={{ marginBottom: 75 }}>
        <div className="w-[50%] network_header flex flex-col items-start justify-center gap-[40px] sm:self-stretch sm:w-auto">
          <b className="network_fontsize self-stretch relative leading-[70px]">
            {t("hero.Committed to your Safety")}
          </b>
          <div className="self-stretch relative text-3xl leading-[132%] network_desc text-grey sm:self-stretch sm:w-auto">{t("hero.Committed Description")}</div>
          <Link href="/">
            <div className="rounded-xl bg-aster-green w-[306px] h-16 flex flex-row py-0 px-5 box-border items-center justify-center text-center text-2xl text-white font-poppins">
              <b className="flex-1 relative leading-[64px]">{t("hero.View More")}</b>
            </div>
          </Link>
        </div>
        <div className="rounded-xl bg-blue-light w-[50%] h-[622px] overflow-hidden shrink-0 flex flex-col py-0 px-[30px] box-border items-end justify-center relative md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:h-[400px]">
          <img
            className="absolute my-0 mx-[!important] top-[calc(50%_-_260px)] left-[calc(50%_-_249px)] w-[498px] h-[571px] object-cover z-[0]"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
      </div>
      <div className="hidden rounded-[32px] bg-white flex flex-row items-center justify-center gap-[75px] text-49xl border-[3px] lg:self-stretch lg:w-auto md:w-auto md:[align-self:unset] md:flex-col sm:self-stretch sm:w-auto sm:h-auto sm:rounded-3xl sm:p-2 sm:box-border">
        <div className="rounded-xl w-[50%] flex flex-row items-center justify-center relative gap-[10px] md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:h-auto">
          <img
            className="flex-1 relative rounded-[13px] max-w-full overflow-hidden h-[758px] object-cover z-[0] md:flex-1 sm:flex-1 sm:h-[400px]"
            alt=""
            src="/image-16@2x.png"
          />
          <img
            className="absolute my-0 mx-[!important] top-[calc(50%_-_75px)] left-[calc(50%_-_75px)] w-[150px] h-[150px] z-[1] sm:w-[75px] sm:h-[75px] [&.animate]:sm:animate-[3s_ease_0s_3_normal_forwards_scale-up] sm:opacity-[1]"
            alt=""
            src="/play-button.svg"
            data-animate-on-scroll
          />
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center gap-[70px] md:self-stretch md:w-auto md:flex-col sm:items-start sm:justify-center sm:ps-0 sm:pe-0 sm:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-start sm:ps-4 sm:pe-4 sm:box-border">
            <div className="network_fontsize relative leading-[68.5px] font-black inline-block w-[100%] sm:self-stretch sm:w-auto">
              <span>{t("hero.We will treat")}</span>&nbsp;
              <span className="text-aster-green">{t("hero.you well")}</span>
            </div>
            <div className="network_desc self-stretch relative text-3xl leading-[132%]  text-grey">
              {t("hero.treat description")}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-5xl text-black font-poppins">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
              <Link href="/packages-phcp">
                <div className="relative network_desc font_size20">
                  {t("hero.Preventive Health Check Packages")}
                </div>
              </Link>
              <img
                className="relative w-[24.21px] h-6"
                alt=""
                src="/asiconoutlinearrowsquareup1.svg"
              />
            </div>
            <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
            <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
              <Link href="/">
                <div className="relative  network_desc">
                  {t("hero.Immunisations & Vaccinations")}
                </div>
              </Link>
              <img
                className="relative w-[24.21px] h-6"
                alt=""
                src="/asiconoutlinearrowsquareup1.svg"
              />
            </div >
            <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
            <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
              <Link href="/homecare">
                <div className="relative network_desc font_size20">{t("hero.Home Care Services")}</div>
              </Link>
              <img
                className="relative w-[24.21px] h-6"
                alt=""
                src="/asiconoutlinearrowsquareup1.svg"
              />
            </div >
            <div className="self-stretch relative box-border h-[3px] border-t-[3px] border-solid border-blue-light" />
            <div className="self-stretch rounded-lg flex flex-row items-center justify-between">
              <Link href="/">
                <div className="relative network_desc font_size20">
                  {t("hero.Aster Maternity Packages")}
                </div>
              </Link>
              <img
                className="relative w-[24.21px] h-6"
                alt=""
                src="/asiconoutlinearrowsquareup1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="topbar_wrapper px-0 items-center justify-center gap-[50px]
       text-center lg:self-stretch lg:w-auto lg:items-center lg:justify-center
        lg:ps-0 lg:box-border md:py-[50px] md:px-0 md:box-border 
        sm:self-stretch sm:w-auto sm:gap-[30px] 
        sm:items-center sm:justify-center sm:py-[50px] sm:px-0 
        sm:box-border" style={{ marginBottom: 75 }}>
        <div className="flex flex-col items-center justify-start gap-[5px] lg:self-stretch lg:w-auto margin_bottom_div">
          <h3
            style={{
              boxSizing: "border-box",
              textTransform: "inherit",
              textAlign: "inherit",
              fontStyle: "inherit",
              margin: "0px",
              fontSize: "inherit",
              lineHeight: "inherit",
              fontWeight: "inherit",
              color: "inherit",
              fontFamily: "inherit",
              marginTop: "0px",
              marginBottom: "0px",
              letterSpacing: "inherit",
              fontSize: "27px",
              fontWeight: "500",
            }}
          >
            {t("hero.Patient and Visitor Guide")}
          </h3>
          <div className="network_desc self-stretch relative text-3xl leading-[132%] text-grey">
            {t("hero.guide description")}
          </div>
        </div>
        <div className="topbar_wrapper flex flex-row items-start justify-start gap-[30px]
         text-start text-5xl font-work-sans lg:self-stretch lg:w-auto lg:flex-row
          lg:gap-[30px] lg:items-center lg:justify-center lg:ps-0 lg:pe-0 lg:box-border
           md:self-stretch md:w-auto md:flex-col md:ps-0 md:pe-0 md:box-border sm:self-stretch 
           sm:w-auto sm:gap-[30px] sm:ps-0 sm:pe-0 sm:box-border">
          <div className="w-[43%] flex flex-col items-start justify-start gap-[30px]
           lg:flex-col md:self-stretch md:w-auto md:flex-1 sm:ps-0 sm:pe-0 sm:box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] md:flex-row">
              <div className="treatwell_block bg_blue rounded-xl visitor_box flex-1 bg-blue-light
               overflow-hidden flex flex-col py-[15px] px-[15px]
                items-start justify-start gap-[5px]
                 sm:flex-[unset] sm:self-stretch">
                <img
                  className="relative w-9 h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/hospital-1.svg"
                />
                <Link href="/plan-your-visit">
                  <div className="self-stretch relative font-semibold inline-block h-[30px] shrink-0"
                    style={{ fontSize: 17 }} >
                    {t("hero.Plan your visit")}
                  </div>
                </Link>
<Link href="/plan-your-visit">
                <div className="self-stretch relative text-lg leading-[132%] 
                 font-paragraph-01"  style={{ fontSize: 14 }} >
                  {t("hero.plan description")}
                </div>
</Link>

              </div>
              <div className="treatwell_block bg_blue rounded-xl visitor_box flex-1 bg-blue-light
               overflow-hidden flex flex-col py-[15px] px-[15px]
                items-start justify-start gap-[5px]
                 sm:flex-[unset] sm:self-stretch">
                <img
                  className="relative w-9 h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/stethoscope-1.svg"
                />
                <Link href="/all-about-appointments">
                  <div className="self-stretch relative font-semibold inline-block h-[30px] shrink-0"
                    style={{ fontSize: 17 }}>
                    {t("hero.All about Appointments")}
                  </div>
                </Link>
<Link href="/all-about-appointments">
                <div className="self-stretch relative text-lg leading-[132%] 
                font-paragraph-01"
                  style={{ fontSize: 14 }}>
                  {t("hero.all about description")}
                </div>
</Link>

              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] md:flex-row">
              <div className="treatwell_block bg_blue rounded-xl visitor_box flex-1 bg-blue-light
               overflow-hidden flex flex-col py-[15px] px-[15px]
                items-start justify-start gap-[5px]
                 sm:flex-[unset] sm:self-stretch">
                <img
                  className="relative w-9 h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/hospital-11.svg"
                />
                <Link href="/admission-and-discharge">
                  <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0"
                   style={{ fontSize: 17 }}>
                    <p className="m-0">{t("hero.Admission &")}</p>
                    <p className="m-0">{t("hero.Discharge")}</p>
                  </div>
                </Link>
<Link href="/admission-and-discharge">
                <div className="self-stretch relative text-lg leading-[132%] 
                 font-paragraph-01" style={{ fontSize: 14 }}>
                  {t("hero.admission description")}
                </div>
</Link>

              </div>
              <div className="treatwell_block bg_blue rounded-xl visitor_box flex-1 bg-blue-light
               overflow-hidden flex flex-col py-[15px] px-[15px]
                items-start justify-start gap-[5px]
                 sm:flex-[unset] sm:self-stretch">
                <img
                  className="relative w-9 h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/hospital-12.svg"
                />
                <Link href="/rights-and-responsibilities">
                  <div className="self-stretch relative font-semibold inline-block h-[50px] shrink-0"
                   style={{ fontSize: 17 }}>{t("hero.Patient Rights & Responsibilities")}</div>
                </Link>
<Link href="/rights-and-responsibilities">
                <div className="self-stretch relative text-lg leading-[132%] 
                font-paragraph-01" style={{ fontSize: 14 }}>
                  {t("hero.Rights Description")}
                </div>
</Link>

              </div>
            </div>
          </div >
          <img
            className="rounded-xl relative w-[57%] h-[478px] object-cover 
            lg:w-[47%] lg:self-stretch lg:h-auto md:self-stretch md:w-auto md:flex-1"
            alt=""
            src="/rectangle-66@2x.png"
          />
        </div >
      </div >
    </div >
  );
};

export default BodyPage;
