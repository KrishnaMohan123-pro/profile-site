import React from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
export default function PersonalInfo(){
    return <section id="personal">
        <Grid container className="personal-info-container">
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
                <div className="profile-image-container"></div>
                <div className="profile-name-container">
                    <p className="profile-name">Krishna Mohan</p>
                </div>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}><p>contact details</p></Grid>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12} ><p>Other personal info</p></Grid>
        </Grid>
    </section>
}