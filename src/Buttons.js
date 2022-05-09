import React from "react";

export function Buttons({ handleTableChange2, result}) {

    function Clickedprev() {


        handleTableChange2(false)

    }
    function Clickednext() {
        handleTableChange2(true)
    }

    function Clickedcancel(){
        console.log(result)
    }


    return (
        <div>
            <button class="button-64" role="button" onClick={() => Clickedprev()}><span class="text">Előző feladat</span>
            </button><button class="button-64" role="button" onClick={() => Clickednext()}><span class="text">Következő feladat</span></button>
            <br />
            <button class="button-64 savebtn" role="button"><span class="text">Mentés</span></button>
            <button class="button-64 savebtn" role="button" onClick={() => Clickedcancel()}><span class="text">Mégsem</span></button>
        </div>
    );
}