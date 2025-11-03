export function Button({descricao}: any) {
    return (
        <button className="bg-fuchsia-700 hover:bg-fuchsia-800 cursor-pointer text-white text-md py-1 px-4 rounded">
            {descricao}
        </button>
    )
}