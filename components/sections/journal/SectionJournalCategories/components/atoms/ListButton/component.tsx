import stls from './stls.module.sass'

type TProps = {
    title: string,
}

export const ListButton: React.FC<TProps> = ({ title }) => {
    return (
        <button className={stls.button}>{title}</button>
    )
}