export const status_checker = (status: string) => {
  switch (status.toLocaleLowerCase()) {
    case "open":
      return (
        <span
          style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, 0.1)",
            padding: "0 10px",
          }}
          className="w-fit rounded-full inline-block"
        >
          {status}
        </span>
      );
    case "on hold":
      return (
        <span
          style={{
            color: "orange",
            backgroundColor: "rgba(255, 165, 0, 0.1)",
            padding: "0 10px",
          }}
          className="w-fit rounded-full inline-block"
        >
          {status}
        </span>
      );
    case "closed":
      return (
        <span
          style={{
            color: "red",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            padding: "0 10px",
          }}
          className="text-red-700 w-fit rounded-full inline-block"
        >
          {status}
        </span>
      );
      case "employer":
          return (
              <span
                  style={{
                      color: "green",
                      backgroundColor: "rgba(0, 128, 0, 0.1)",
                      padding: "0 10px",
                  }}
                  className="w-fit rounded-full inline-block"
              >
          {status}
        </span>
          );
      case "job seeker":
          return (
              <span
                  style={{
                      color: "orange",
                      backgroundColor: "rgba(255, 165, 0, 0.1)",
                      padding: "0 10px",
                  }}
                  className="w-fit rounded-full inline-block"
              >
          {status}
        </span>
          );
    default:
      return <span>{status}</span>;
  }
};
