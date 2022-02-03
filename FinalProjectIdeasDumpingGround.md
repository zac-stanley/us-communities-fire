# California Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  

1. ### What questions need to be answered before zeroing in on data?
    - time period of data - burn/fire probability and census data should be the same or close
    - Smallest unit area of census data?
    - What dataset will be used to determine wildfire risk?
    - what scale will the data be mapped at? can this be dynamic or change based on zoom levels - chorpleth @ state scale using counties, zoom to census tracts with another chropleth, zoom to  hex bins of some undetermined unit area
        - do the above require different methods to map them?
        - what platform or js library will be used to accomplish this?
            - **mapbox or leaflet most likely**
2. ### Methodology
     - If using raster for fire probability convert pixels to points
     - use some undertermined method to come up with a vulnerability score for census designated places being vulnerable
        - **something like renters, access to transportation, median income, disabilities in a household, language barriers \(primary language spoken in households\)**
            - this will require literature review




