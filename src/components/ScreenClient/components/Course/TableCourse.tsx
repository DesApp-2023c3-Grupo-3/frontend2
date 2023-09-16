import { useCarousel } from "../../hooks/useCarousel";
import { useSocketStore } from "../../store/socketStore";
import { carouselTableArray } from "../../utils/carousel";
import Dots from "../Dots";
import RowsCourse from "./RowsCourse";

function TableCourse() {
    const courseMessages = useSocketStore(state => state.getCoursesMessages())
    const courseMessagesCarousel = carouselTableArray(courseMessages, 11)

    const { selectedIndex, selectedItem } = useCarousel(courseMessagesCarousel, 20)

    return (
            <main className="px-4 py-2">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full bg-[#74B235] text-center text-lg">
                        <thead className="text-white uppercase">
                            <tr>
                                <th className="font-normal w-1/4" scope="col">
                                    Materia
                                </th>
                                <th className="font-normal w-1/4" scope="col">
                                    Comision
                                </th>
                                <th className="font-normal w-1/4" scope="col">
                                    Aula
                                </th>
                                <th className="font-normal w-1/4" scope="col">
                                    Horario
                                </th>
                            </tr>
                        </thead>
                        <RowsCourse items={selectedItem} />
                    </table>
                </div>
                <Dots selectedIndex={selectedIndex} items={courseMessagesCarousel} sx="mx-auto w-full justify-center" />
            </main>
    );
}


export default TableCourse