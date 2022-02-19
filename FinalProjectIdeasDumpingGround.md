# California Communities in Harms Way:
## **Where are the vulnerable in relation to fire risk**  

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
    - Use [CDC SVI](https://www.atsdr.cdc.gov/placeandhealth/svi/documentation/SVI_documentation_2018.html) data at the tract level to acquire vulnerability score rather than creating my own
    - This could be done with the following workflow:
        1. ##### Assigning Wildfire Hazard Class to CDPs
            - Run zonal statistics on CDPs and wildfire hazard potential raster and assign class that is the majority in each CDP
            - Filter out values to only keep classes 3 (moderate), 4 (high), 5 (very high) 
            - This results in 2,854 CDPs in the U.S.


      



