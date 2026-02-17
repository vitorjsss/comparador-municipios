function LargeCard({ cityName, state, source }) {
    return (
        <div className="p-8 bg-white rounded-xl shadow-sm flex flex-col sm:flex-row items-start w-full justify-between gap-4">
            <div>
                <h1 className="text-gray-900 text-4xl font-bold mb-2">{cityName}</h1>
                <h2 className="text-gray-600 font-normal text-lg">{state}</h2>
            </div>
            <div className="px-4 py-2 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-primary-700 font-semibold text-sm">{source}</p>
            </div>
        </div>
    )
}

export default LargeCard