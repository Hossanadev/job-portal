import Authenticated from "@/Layout/Authenticated";
import {JobsCard} from "@/components/JobsCard";
import {JobsData} from "../../../utilities/data";
import {Filter} from "react-feather";

export default async function Jobs() {
    const Jobs = await JobsData;
  return (
    <Authenticated>
      {/* breadcrumb */}
      <>
          <div className={"flex justify-between"}>
              <p className="text-md font-normal text-sm w-fit text-green-700 hover:cursor-pointer">
                  Jobs
              </p>
              <div className={"button w-fit flex space-x-2 items-center"}>
                  <Filter size={16} />
                  <p>Filter</p>
              </div>
          </div>
          <div className={"my-5 justify-between grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-4 max-sm:gap-3 gap-5"}>
              {
                  Jobs.map((job: any) => (
                      <JobsCard
                          id={job.id}
                          key={job.id}
                          image={job.image}
                          title={job.title}
                          company={job.company}
                          date={job.date}
                          href={job.href ?? "#"}
                      />
                  ))
              }
          </div>
      </>
    </Authenticated>
  );
}
