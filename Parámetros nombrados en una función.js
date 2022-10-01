/**
 * !Parámetros nombrados en una función
 */
const createGodzilla = ({ color, weight, material, sound, powers }) => {
   const gotzillaViews = {
      color,
      weight,
      sound,
   };
   return gotzillaViews;
};

const gotzillaParams = {
   color: "Negro",
   weight: 200,
   sound: "Grrr",
};

createGodzilla(gotzillaParams);
