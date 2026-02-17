import CityContent from "@/features/cities/components/CityContent";

async function City({ params }) {
    const { cityId, stateId } = await params;

    return <div className="min-h-screen mt-auto">
        <CityContent cityId={cityId} stateId={stateId} />
    </div>
}

export default City