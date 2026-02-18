'use client'
import { useState } from "react";
import CitySelector from "../cidades/CitySelector";
import StateSelector from "../cidades/StateSelector";
import CityInfo from "./CityInfo";

function CardsComparacao() {
    const [firstState, setFirstState] = useState(null);
    const [firstCity, setFirstCity] = useState(null);

    const [secondState, setSecondState] = useState(null);
    const [secondCity, setSecondCity] = useState(null);

    return (
        <div className="flex flex-row gap-10 w-full h-[70vh] mt-5">
            <div className="bg-white p-4 rounded-lg shadow-sm w-full flex flex-col items-center justify-center">
                {firstCity ?
                    (
                        <CityInfo
                            cityId={firstCity.id}
                            stateId={firstState?.id}
                            setCityId={setFirstCity}
                            setStateId={setFirstState}
                        />
                    ) : (
                        <>
                            <h2 className="font-bold text-3xl text-gray-900 mb-10">Selecione o primeiro município</h2>
                            <div className="flex flex-col px-10 gap-6 w-full mb-10">
                                <StateSelector
                                    value={firstState}
                                    onChange={setFirstState}
                                />
                                <CitySelector
                                    stateId={firstState?.id}
                                    value={firstCity}
                                    onChange={setFirstCity}
                                />
                            </div>
                        </>
                    )
                }
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm w-full flex flex-col items-center justify-center">
                {secondCity ?
                    (
                        <CityInfo
                            cityId={secondCity.id}
                            stateId={secondState?.id}
                            setCityId={setSecondCity}
                            setStateId={setSecondState}
                        />
                    ) : (
                        <>
                            <h2 className="font-bold text-3xl text-gray-900 mb-10">Selecione o segundo município</h2>
                            <div className="flex flex-col px-10 gap-6 w-full mb-10">
                                <StateSelector
                                    value={secondState}
                                    onChange={setSecondState}
                                />
                                <CitySelector
                                    stateId={secondState?.id}
                                    value={secondCity}
                                    onChange={setSecondCity}
                                />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default CardsComparacao