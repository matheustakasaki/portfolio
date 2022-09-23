
interface TechProps {
    nameImage: string,
    techImage: string,
    altTextTechImage: string,
    description: string
}
export default function Tech(props: TechProps) {
    return (

        <section className="flex items-start h-auto gap-2 my-4 p-2">

            <img src={props.nameImage} />

            <img className="w-[40px]" src={props.techImage} alt={props.altTextTechImage} />

            <p>{props.description}</p>

        </section>
    )
}
