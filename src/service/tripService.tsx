












 export const AddTrip = async (e) => {
    try {
        const response = await fetch("http://localhost:3001/trip", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(FormData),
        });

        if (response.ok) {
            console.log("trip added successfully!");
          } else {
            console.error("Failed to add trip.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
}




//  const EditTrip = async (e) => {
   

//     try {
//         const res = await fetch(`http://localhost:3001/trips/${id}`, {
//             method: "PUT",
//             headers: {"Content-Type": "application/json",},
//             body: JSON.stringify(FormData),
//           });
          
//         } catch (error) {
//             console.error("Error:", error);
//           }
//         return res.json();
//     };
// };

export const deleteTrip = async (id) => {
    

    try {
        const res = await fetch(`http://localhost:3001/trip/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(FormData),
          });
          if (!res.ok) {
            console.error("Failed to delete trip.");
           
           
          } else {
              console.log("Trip deleted successfully!");
            return res.json();
          }
          } catch (error) {
          console.error("Error:", error);
        }
         


    };

export const updateTrip = async (id) => {
    try {
    const res = await fetch(`http://localhost:3001/trip/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(FormData),
      });
      if (!res.ok) {
        console.error("Failed to update trip.");
       
       
      } else {
          console.log("Trip updated successfully!");
        return res.json();
      }
      } catch (error) {
      console.error("Error:", error);
}}

