"use server";

export async function shareMeal(formData) {
  const meal = {
    //get from the input name
    title: formData.get("title"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };
  console.log(meal);
}
