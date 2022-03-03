# California Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  

#### Old Description
The *spatial analysis* component will first look at 2014 Wildfire Hazard Potential (WHP) for the United States as the initial metric - areas with moderate to very high fire risk will determine what communities are futher analyzed. The results of this will then be overlayed 2015 U.S. Census Designated Places \(CDPs\) polygons using weighted averaging or zonal statistics to determine what hazard potential is assgined to a CDP. The CDPs will be joined to multiple tables of U.S. Census 5-year estimate American Community Survey Data profiles (ACS). From these raw ACS data, averages will be calculated for each CDP input into the vulnerability index and compared to the national average. If one of the CDP inputs has an average higher than that of the national average for a given it will be assigned a score of 1 on the vulnerability index. These results of each average calculation will be combined to create a non-weighted vulberability index by which communities will be ranked on a scale from 1-7 (1 being the least vulnerable and 7 being the most vulnerable) that will look something like the following:


1. #### What questions need to be answered before zeroing in on data?
    - do we want to consider the after fire effects i.e. if people rent and they lose their home will they have to move and what are the long term effects of that? housing status and quality of? Could be in write-up.
    - what about tribes? Does the census even count them? address in write up

2. #### Methodology
     - **Vulberability Index - value will get a 1 if percentage is greater than the national average, zero if below.
     - If using raster for fire probability convert pixels to points?
     - use some undetermined method to come up with a vulnerability score/index for census designated places being vulnerable
        - *something like above average population of renters, access to transportation, age \(old and young\), education, above average poverty, disabilities in a household, mental illness, language barriers \(primary language spoken in households, can't understand evacuation warnings etc.\), those who have been incarcerated*
            - this will require literature review  
            - what other factors should be included in score 
    - Assigning WHP to CDPs - 
         1. zonal stats on all raster classes
         

2. #### Vulnerability Brain Dump
      - The World Health Organization defines vulnerable as “… the degree to which a population, individual or organization is unable to anticipate, cope with, resist and recover from the impacts of disasters.
      -  Centers for Disease Control and Prevention (CDC) states that vulnerable populations may include anyone who has difficulty communicating, has difficulty accessing medical care, may need help maintaining independence, requires constant supervision, or may need help accessing transportation.
      - One that won't be in census data *social realm, vulnerable populations include those living in abusive families, the homeless, immigrants, and refugees*
        - this can maybe be addressed in my write up
3. #### Calculations that need to be made from raw census data to develop vulnerability index: 
      - poverty rate  - based on median earnings compared to national average

4. #### Updated Methodology 02/19/2022  
    
    1. ##### Assigning Wildfire Hazard Potential Class to CDPs
        - Run zonal statistics on CDPs and wildfire hazard potential raster and assign class that is the majority in each CDP
        - Filter out values to only keep classes 3 (moderate), 4 (high), 5 (very high) 
        - This results in 2,854 CDPs in the U.S.  

    2. ##### Calculating SVI at CDP level from tracts  
        - Use [CDC social vulnerability index (SVI)](https://www.atsdr.cdc.gov/placeandhealth/svi/documentation/SVI_documentation_2018.html) data at the tract level to acquire vulnerability score rather than  creating my own
        - Intersect CDPs with classed with zonal statistics as 3 (moderate), 4 (high), 5 (very high) 
        - Use pandas/geopandas to summarize tract areas SVI mean scores weighted to area of tract inside CDP. This would make it so that a smaller area of a tract intersected in a CDP would have less impact on a CDPs overall SVI scores than a piece of a tract that takes up more area in the CDP. 
        - The SVI scores are averages across a tract and the above process would effectively average the averages (arithmetic mean) for each score type in each CDP.
        - The above would be calculated for 4 theme ranking variables:
            - Socioeconmic
            - Household Composition & Disability
            - Minority Status & Language
            - Housing Type & Transportation
            - Overall Summary Ranking




