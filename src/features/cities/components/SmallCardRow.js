function CardRow({ children }) {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {children}
        </div>
    )
}

export default CardRow
