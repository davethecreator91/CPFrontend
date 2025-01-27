const DeleteTrip = () => {

    const handleDeleteTrip = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3001/trips/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(FormData),
              });
              return res.json();
        }
    }

}