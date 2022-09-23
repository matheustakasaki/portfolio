
interface TechProps {
    nameImage: string,
    techImage: string,
    description: string
}
export default function Tech(props: TechProps) {
    return (

        <section className="flex items-start h-auto gap-2 my-4 p-2">

            <img src={props.nameImage} alt="vtexio" />

            <img className="w-16" src={props.techImage} alt="vite" />

            <p>{props.description}</p>

        </section>
    )
}
