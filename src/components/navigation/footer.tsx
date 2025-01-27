import { whatwedo, solution } from "@/common/constant";
import Image from "next/image";
import Logo from "../../asset/Seecondary Logo copy 2.png";

const Footer = () => {
  return (
    <div className={"bg-primary p-12"}>
      <div className={"grid grid-cols-4 md:grid-col-1 gap-10"}>
        <div className={"flex flex-col gap-3"}>
          <Image src={Logo} alt={""} width={150} height={50} />
          <p className={"text-sm text-white"}>
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
        </div>

        <div className={"flex flex-col gap-3"}>
          <h1 className={"text-xl font-semibold text-white"}>What We do</h1>
          <div className={"flex flex-col gap-2"}>
            {whatwedo.map(({ id, title }) => {
              return (
                <p className={"text-white text-sm"} key={id}>
                  {title}
                </p>
              );
            })}
          </div>
        </div>

        <div className={"flex flex-col gap-3"}>
          <h1 className={"text-xl font-semibold text-white"}>Company</h1>
          <div className={"flex flex-col gap-2"}>{}</div>
        </div>

        <div className={"flex flex-col gap-3"}>
          <h1 className={"text-xl font-semibold text-white"}>Solution</h1>
          <div className={"flex flex-col gap-2"}>
            {solution.map(({ id, title }) => (
              <p className={"text-white text-sm"} key={id}>
                {title}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
