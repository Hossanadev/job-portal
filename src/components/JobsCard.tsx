import {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {JobsCardProps} from "../../utilities/types";

export const JobsCard: FC<JobsCardProps> = (props) => {
    const { image, title, company, date, href } = props
    return (
        <div className={"p-2 bg-white w-full md:w-[260px] rounded space-y-4 pb-4"}>
            <Image src={image} alt={title} className={"bg-[#D7FCE7] w-full h-[160px] object-cover"} />
            <div className={"flex justify-between"}>
                <p className={"text-[13px] text-green-700"}>{title}</p>
                <p className={"text-[13px] text-green-700"}>{company}</p>
            </div>
            <div className={"flex justify-between"}>
                <p className={"text-[13px] text-green-700"}>{date}</p>
                <Link href={href}><p className={"button text-[10px]"}>Learn More</p></Link>
            </div>
        </div>
    )
}