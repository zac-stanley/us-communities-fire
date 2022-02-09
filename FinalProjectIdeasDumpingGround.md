# California Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  

1. #### What questions need to be answered before zeroing in on data?
    - time period of data - burn/fire probability and census data should be the same or close
    - Smallest unit area of census american community survey data?
    - should I start by looking at communities with above average numbers of rental housing?
    - do we want to consider the after fire effects i.e. if people rent and they lose their home will they have to move and what are the long term effects of that? housing status and quality of?
    - think about the percentage of the population at risk in the whole state
    - what about tribes? Does the census even count them? Do we call those out separately on the map
    - socioeconomic factors matter because they limit residents’ ability to prevent fires by, for example, upgrading to fire-resistant roofing.
    - What dataset will be used to determine wildfire risk? WUI? Burn Probability?
    - what about areas recently burned / footprints
    - what scale will the data be mapped at? can this be dynamic or change based on zoom levels - chorpleth @ state scale using counties, zoom to census tracts with another chropleth, zoom to  hex bins of some undetermined unit area
        - do the above require different methods to map them?
        - what platform or js library will be used to accomplish this?
            - **mapbox or leaflet most likely**
2. #### Methodology
     - **Vulberability Index - value will get a 1 if percentage is greater than the national average.
     - If using raster for fire probability convert pixels to points?
     - use some undetermined method to come up with a vulnerability score/index for census designated places being vulnerable
        - *something like above average population of renters, access to transportation, age \(old and young\), education, above average poverty, disabilities in a household, mental illness, language barriers \(primary language spoken in households, can't understand evacuation warnings etc.\), those who have been incarcerated*
            - this will require literature review  
            - what other factors should be included in score 
    - zonal stats or weighted mean analysis to calculate burn probability in hex bin or tract/communities/or counties 
    - buffers aroudn cdps - research an appropriate buffer distance that takes into account how far a fire can spread. The 900 m smoothing distance is consistent with work by Caggiano et al. \(2020\) showing that all home losses to wildfire from 2000 to 2018 were within 850 m of wildland vegetation
        -  at what distance do evacuation warnings take place?
        - analysis, particularly bufffering needs to be done with an equal area projection

2. #### Vulnerability Brain Dump
      - The World Health Organization defines vulnerable as “… the degree to which a population, individual or organization is unable to anticipate, cope with, resist and recover from the impacts of disasters.
      -  Centers for Disease Control and Prevention (CDC) states that vulnerable populations may include anyone who has difficulty communicating, has difficulty accessing medical care, may need help maintaining independence, requires constant supervision, or may need help accessing transportation.
      - One that won't be in census data *social realm, vulnerable populations include those living in abusive families, the homeless, immigrants, and refugees*
        - this can maybe be addressed in my write up
3. #### For collecting Cenus Tabular Data
      - filter by, US, All places and year is 2019
4. #### Calculations that need to be made from raw census data to develope vulnerability index: 
      - poverty rate  - based on median earnings compared to national average
      



