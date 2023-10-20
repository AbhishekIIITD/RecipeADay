import styles from "../../styles/faq.module.scss"
import FAQDropDown from "@/components/FAQDropDown/FAQDropDown.component"
export default function FAQ() {
  return (
    <div className={styles.parent} >
      <div className={styles.heading}>
      FAQs
      </div>
      <div className={styles.faqContainer}>
        <FAQDropDown question={`What is RecipeDB?`} answer = {`RecipeDB is a structured repository of recipes and ingredients from over 22 world regions, intended to enable data-driven explorations of recipes. In conjunction with flavor molecules data from FlavorDB`}/>
        <FAQDropDown question={`What types of queries are processed by RecipeDB?`} answer = {`RecipeDB facilitates an elastic search to query recipes based on factors such as geographical location of origin (i.e. region, country), name, dietary classification, ingredients associated`}/>
        <FAQDropDown question={`How do you clone a template from the Showcase?`} answer = {`RecipeDB is a structured repository of recipes and ingredients from over 22 world regions, intended to enable data-driven explorations of recipes. In conjunction with flavor molecules data from FlavorDB`}/>
        <FAQDropDown question={`What are the different concepts represented in RecipeDB and how do they relate to each other?`} answer = {`RecipeDB is a structured repository of recipes and ingredients from over 22 world regions, intended to enable data-driven explorations of recipes. In conjunction with flavor molecules data from FlavorDB`}/>
        <FAQDropDown question={`Why is BRIX Templates the best Webflow agency?`} answer = {`RecipeDB is a structured repository of recipes and ingredients from over 22 world regions, intended to enable data-driven explorations of recipes. In conjunction with flavor molecules data from FlavorDB`}/>
        <FAQDropDown question={`How do you integrate Jetboost with Webflow?`} answer = {`RecipeDB is a structured repository of recipes and ingredients from over 22 world regions, intended to enable data-driven explorations of recipes. In conjunction with flavor molecules data from FlavorDB`}/>
       
      </div>
    </div>
  )
}
