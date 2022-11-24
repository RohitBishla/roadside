import { Button } from "@mui/material";
import React, { useState } from "react";
import InputBox from "./inputBox";
import Papa from "papaparse"
import ResultPage from "./resultPage";
const HomePage = () => {
    const [linespace, setlinespace] = useState("10px")
    const [issubmit, setissubmit] = useState(0);
    function changePage(e) {
        setissubmit(1);
    }
    //code added
    const [CSVData, setCSVData] = useState("");
    var commonConfig = { delimiter: "," };
    function parseData(e) {
        console.log(e);
        Papa.parse(
            e.target.files[0],
            {
                ...commonConfig,
                header: true,
                download: true,
                complete: (result) => {
                    setCSVData(result.data);
                }
            }
        );
    }
    
    console.log(CSVData);
    console.log(issubmit);
    if (issubmit === 0) {

        return (
            <>
                <div style={{ height: "100px" }}>

                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ width: '60%' }}>
                        <div style={{ backgroundColor: "#f8ecbc", width: '80%', margin: "auto", border: "2px solid black", borderRadius: "20px", fontSize: "25px" }}>
                            <h3 style={{ textAlign: "center", fontSize: "35px" }}>
                                Steps:
                            </h3>
                            <ol >
                                <li style={{ marginTop: linespace }}>Upload the Source JSON and the Mapping files.
                                    Supported extension for the Mapping file is "csv" </li>
                                <br />
                                <li style={{ marginTop: linespace }}>Click on "Proceed".</li>
                                <br />
                                <li style={{ marginTop: linespace }}>A new page will open with the newly converted JSON file and the respective Code.</li>
                                <br />
                                <li style={{ marginTop: linespace }}>User may download the JSON file and the Code.</li>
                            </ol>
                        </div>
                    </div>
                    <div style={{ width: "40%", display: "flex", flexDirection: "column", alignItems: "center", margin: "auto", height: '100%' }}>
                        <InputBox
                            text="Source JSON"
                            type="application/JSON"
                        />
                        <div style={{ height: "50px" }}>

                        </div>
                        <InputBox
                            text="Mapping File"
                            type=".csv"
                            parsing={parseData}
                        />
                        <div style={{ marginTop: "5%", width: "100%", textAlign: "center" }}>
                            <Button variant="contained" style={{ margin: "auto", width: "30%" }} onClick={e => changePage(e)}>
                                Proceed
                            </Button>

                        </div>

                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <ResultPage
                    fun={setissubmit}
                />

            </>
        );
    }
}
export default HomePage;