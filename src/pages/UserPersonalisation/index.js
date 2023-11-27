import { useState } from "react";
import styles from "../../styles/userPersonalisation.module.scss";
import { useRouter } from "next/dist/client/router";

export default function UserForm() {
    const router = useRouter();
    const { user, email } = router.query;

    const [formData, setFormData] = useState({
        userEmail: email || "",
        Age: "",
        vegNonVeg: "vegetarian",
        height: "",
        healthIssues: "none",
        weight: "",
        cuisine: "none",
        Age: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData); // Log the formData to ensure it's captured on submit

        try {
            const response = await fetch("/api/userform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Assuming success means redirecting to a user dashboard
                router.push({
                    pathname: "/User_dashboard",
                    query: { user: user, email: email },
                });
            } else {
                console.log("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return ( < >
        <
        div className = { styles.userFormContainer + " text-black mt-40 mb-6 pb-6" } >
        <
        h1 className = { styles.ArchitectureFont + " text-white text-3xl" } > { " " }
        User Information Form { " " } <
        /h1>{" "} <
        form onSubmit = { handleSubmit } >
        <
        label className = "text-white md-3"
        htmlFor = "vegNonVeg" > { " " }
        Diet Preference { " " } <
        /label>{" "} <
        select id = "vegNonVeg"
        name = "vegNonVeg"
        value = { formData.vegNonVeg }
        onChange = { handleChange }
        required >
        <
        option value = "vegetarian" > Vegetarian < /option>{" "} <
        option value = "nonvegetarian" > Non - vegetarian < /option>{" "} < /
        select > <
        label className = "text-white md-3"
        htmlFor = "height" > { " " }
        Height( in cm): { " " } <
        /label>{" "} <
        input type = "number"
        id = "height"
        name = "height"
        value = { formData.height }
        onChange = { handleChange }
        required /
        >
        <
        input type = "number"
        id = "Age"
        name = "Age"
        value = { formData.Age }
        onChange = { handleChange }
        required /
        >
        <
        label className = "text-white md-3"
        htmlFor = "weight" > { " " }
        weight( in KG): { " " } <
        /label>{" "} <
        input type = "number"
        id = "weight"
        name = "weight"
        value = { formData.weight }
        onChange = { handleChange }
        required /
        >
        <
        label className = " text-white md-3"
        for = "healthIssue" > { " " }
        Select a Health Issue: { " " } <
        /label>{" "} <
        select id = "healthIssues"
        name = "healthIssues"
        value = { formData.healthIssues }
        onChange = { handleChange }
        required >
        <
        option value = "None" > none < /option>{" "} <
        option value = "Obesity" > Obesity < /option>{" "} <
        option value = "Type 2 Diabetes" > Type 2 Diabetes < /option>{" "} <
        option value = "Cardiovascular Disease" > { " " }
        Cardiovascular Disease { " " } <
        /option>{" "} <
        option value = "Hypertension (High Blood Pressure)" > { " " }
        Hypertension(High Blood Pressure) { " " } <
        /option>{" "} <
        option value = "Cancer" > Cancer < /option>{" "} <
        option value = "Osteoporosis" > Osteoporosis < /option>{" "} <
        option value = "Food Allergies" > Food Allergies < /option>{" "} <
        option value = "Celiac Disease" > Celiac Disease < /option>{" "} <
        option value = "Irritable Bowel Syndrome (IBS)" > { " " }
        Irritable Bowel Syndrome(IBS) { " " } <
        /option>{" "} <
        option value = "Inflammatory Bowel Diseases (IBD)" > { " " }
        Inflammatory Bowel Diseases(IBD) { " " } <
        /option>{" "} <
        option value = "Gastroesophageal Reflux Disease (GERD)" > { " " }
        Gastroesophageal Reflux Disease(GERD) { " " } <
        /option>{" "} <
        option value = "Dental Health" > Dental Health < /option>{" "} <
        option value = "Eating Disorders" > Eating Disorders < /option>{" "} <
        option value = "Chronic Kidney Disease (CKD)" > { " " }
        Chronic Kidney Disease(CKD) { " " } <
        /option>{" "} <
        option value = "Food Intolerances" > Food Intolerances < /option>{" "} <
        option value = "Autoimmune Diseases" > Autoimmune Diseases < /option>{" "} <
        option value = "Mental Health" > Mental Health < /option>{" "} < /
        select > <
        label className = " text-white md-3"
        for = "preferredCuisine" > { " " }
        Select Your Preferred Cuisine: { " " } <
        /label>{" "} <
        select type = "text"
        id = "cuisine"
        name = "cuisine"
        value = { formData.cuisine }
        onChange = { handleChange } >
        <
        option value = "none" > none < /option>{" "} <
        option value = "American" > American < /option>{" "} <
        option value = "Italian" > Italian < /option>{" "} <
        option value = "Mexican" > Mexican < /option>{" "} <
        option value = "Chinese" > Chinese < /option>{" "} <
        option value = "Indian" > Indian < /option>{" "} <
        option value = "Japanese" > Japanese < /option>{" "} <
        option value = "Thai" > Thai < /option>{" "} <
        option value = "Mediterranean" > Mediterranean < /option>{" "} <
        option value = "French" > French < /option>{" "} <
        option value = "Spanish" > Spanish < /option>{" "} <
        option value = "Greek" > Greek < /option>{" "} <
        option value = "Korean" > Korean < /option>{" "} <
        option value = "Middle Eastern" > Middle Eastern < /option>{" "} <
        option value = "Vegetarian" > Vegetarian < /option>{" "} <
        option value = "Vegan" > Vegan < /option>{" "} <
        option value = "Other" > Other < /option>{" "} < /
        select > <
        input className = "bg-[#3ea79d] hover:scale-105 rounded-md"
        type = "submit"
        value = "Submit" /
        >
        <
        /form>{" "} < /
        div > <
        />

    );
}