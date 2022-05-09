import React, { useEffect, useState } from "react";


export function TaskTable({ id, adatok, onChanged }) {
    let tablename = []
    let tablemax = []
    let tabledesc = []

    const [result, SetResult] = useState([])
    const [MaxPoint, SetMaxPoint] = useState(0)
    const [MyPoint, SetMyPoint] = useState(0)

    useEffect(() => {

        let sum = 0
        adatok.tasks[id].aspects.forEach(element => {
            sum = sum + element.maxValue
        });

        SetMaxPoint(sum)

    }, [])

    useEffect(() => {
        let sum = 0
        result.forEach(element => {
            sum = sum + parseInt(element.value)
            console.log("sum 0 alatt " + element.value)
        });
        console.log("sum " + sum)

        SetMyPoint(sum)


    }, result)


    function Inputchanged(e) {

        try {
            parseInt(e.target.value)
          } catch (error) {
            console.error("error - az input mezőbe csak számot írhatsz bele");
          }
          

        let tmp = result
        if (result) {
            
        }
        tmp.push({ "id": 0, "value": e.target.value })
        SetResult(tmp)
        console.log(result[0].value)
        
        onChanged(result)
    }


    if (adatok.tasks.length == 0) {
        return (
            <div>
                <span> Nincs mit kiirni mert nincsenek is feladatok </span>
            </div>
        );
    } else if (adatok.tasks[id].aspects.length == 0) {
        return (
            <div>
                <span> Nem tartoznak ehhez feladatrészek! </span>
            </div>
        );
    } else {

        adatok.tasks[id].aspects.forEach(element => {
            tablename.push(element.name)
            tablemax.push(element.maxValue)
            tabledesc.push(element.description)
        });


        return (
            <div>


                <span>Max pont: {MaxPoint} </span>
                <span>Elért pont: {MyPoint} </span>


                <div class="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Szempont neve</th>
                                <th>Elért pontszám/Max pontszám</th>
                                <th>Szempont leírás</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                {tablename.map((name) => <tr>{name}</tr>)}

                            </td>
                            <td>
                                {tablemax.map((maxi) => <tr> <input title={"Számot írj be 0 és " + maxi + " között"} min={0} max={maxi} type="number" onChange={Inputchanged} /> /{maxi}</tr>)}
                            </td>
                            <td>
                                {tabledesc.map((d) => <tr>{d}</tr>)}
                            </td>

                        </tbody>
                    </table>
                </div>
            </div>

        );

    }



}

