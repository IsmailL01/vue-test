export const getStatusColor = (status) => {
  if (status === "Dead") {
    return "red";
  } else if (status === "Alive") {
    return "green";
  } else {
    return "gray";
  }
};
