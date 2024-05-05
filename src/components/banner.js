import { useTranslation } from "next-i18next";
import Image from "next/image";

const Banner = () => {
  const { t } = useTranslation("");
  return (
      <div className="topbar_wrapper flex flex-col items-center justify-center gap-[75px] bg-[url('/MainBanner.png')] bg-cover bg-no-repeat bg-[top] md:flex-col md:items-start md:justify-center"
        style={{ marginBottom: 75, minHeight: 700 }}>
        <div className="flex flex-row">
          <div className="flex flex-col items-start
         justify-center gap-[40px] sm:self-stretch sm:w-auto" style={{ marginLeft: 50 }}>
            <div className="top_banner_head1">
              {t("banner.Aster Royal Hospital")}
            </div>
            <div className="top_banner_head2">
              {t("banner.The latest addition to the aster family")}
            </div>
            <div className="banner_button">
              <b>{t("banner.View Package")}</b>
            </div>
          </div>
          <div className="aaaaa" style={{ width: "42%" }}>
            &nbsp;
          </div>
        </div>
        <div className="hidden xl:block rounded-2xl bg-mediumaquamarine-200 shadow-[4px_4px_30px_5px_rgba(0,_0,_0,_0.1)] max-w-[1000px] h-[190px]  mx-auto" >
          <div className=" rounded-t-2xl rounded-b-none bg-aster-blue max-w-[1000px] h-[63px] text-center" >
            <div className="text-9xl leading-[61px] font-semibold text-white  inline-block w-[445px] h-[63px]">
              How can we help you today?
            </div>
          </div>
          <div className='banner_padding flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center bg-aster-green  items-center gap-5 mt-5'>
            <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
              <Image
              width={11}
              height={11}
                className="w-11 h-11 overflow-hidden"
                alt=""
                src="/memocirclecheck-1.svg"
              />
              <div className='text-lg font-semibold font-work-sans text-white text-center'>
                Book an Apoointment
              </div>
            </div>
            <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
              <Image
              width={11}
              height={11}
                className="w-11 h-11 overflow-hidden"
                alt=""
                src="/usershield-1.svg"
              />
              <div className='text-lg font-semibold font-work-sans text-white text-center'>
                Find a Doctor
              </div>
            </div>
            <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
              <Image
              width={11}
              height={11}
                className="w-11 h-11 overflow-hidden"
                alt=""
                src="/vector1.svg"
              />
              <div className='text-lg font-semibold font-work-sans text-white text-center'>
                E- Consult
              </div>
            </div>
            <div className="flex flex-col mb-6 space-y-4 justify-center items-center">
              <Image
              width={11}
              height={11}
                className="w-11 h-11 overflow-hidden"
                alt=""
                src="/usermd-1.svg"
              />
              <div className='text-lg font-semibold font-work-sans text-white text-center'>
                Insurance Cover
              </div>
            </div>
          </div>
        </div>

      </div>

  );
};

export default Banner;
