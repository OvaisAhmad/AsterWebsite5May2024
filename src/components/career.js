import { useTranslation } from "next-i18next";
import Link from "next/link";

const Career = () => {
  const { t } = useTranslation("");
  return (
    <div className="common_style bg-aster-green career_height flex flex-col py-[50px] px-0 box-border items-center justify-center text-start text-29xl text-white font-paragraph-01 lg:ps-0 lg:pe-0 lg:box-border md:flex-col md:items-start md:justify-start md:ps-0 md:pe-0 md:box-border sm:h-auto sm:flex-col sm:ps-0 sm:pe-0 sm:box-border">
      <div className="topbar_wrapper py-0 px-[50px] items-center justify-center md:ps-8 md:pe-8 md:box-border sm:flex-col sm:items-center sm:justify-center sm:ps-4 sm:pe-4 sm:box-border">
        <div className="flex flex-row flex-wrap items-center justify-center gap-[25px] md:ps-0 md:box-border sm:self-stretch sm:w-auto sm:flex-col sm:items-center sm:justify-center sm:ps-0 sm:pe-0 sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] sm:ps-0 sm:pe-0 sm:box-border sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch relative leading-[57px] font-black md:text-21xl sm:text-17xl">
              {t("career.Join Us in Redefining Healthcare:")}
            </div>
            <Link href="/about/careers">
            <div className="relative rounded-xl box-border w-72 h-[68px] overflow-hidden shrink-0 min-w-[288px] max-w-[390px] text-2xl font-poppins border-[3px] border-solid border-white">
              <div className="absolute top-[2px] left-[407px] w-5 h-10 overflow-hidden flex flex-col items-center justify-end">
                <div className="relative w-5 h-5 overflow-hidden shrink-0" />
              </div>
              <b className="color_white absolute top-[2px] left-[calc(50%_-_41px)] leading-[64px]">
                {t("career.CAREER")}
              </b>
            </div>
            </Link>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center text-xl text-gray-400 sm:flex-col sm:items-start sm:justify-start sm:ps-0 sm:pe-0 sm:box-border sm:flex-[unset] sm:self-stretch">
            <div className="library_content network_desc common_style flex-1 relative leading-[132%] sm:font-paragraph-01 sm:text-base sm:flex-[unset] sm:self-stretch">
              {t("career.description")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
