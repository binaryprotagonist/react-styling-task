import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { icons } from "../../assets";
import Divider from "@mui/material/Divider";

export const CardComponent = () => {
  const [personData, setPersonData] = React.useState([]);
  React.useEffect(() => {
    loadJsonData();
  }, [personData]);
  const loadJsonData = async () => {
    await fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPersonData(data));
  };

  return personData?.map((person) => (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: 26, fontStyle: "italic" }}
            color="text.secondary"
            gutterBottom
          >
            {person?.name}
          </Typography>
          <Box m={1}>
            <LocalPhoneTwoToneIcon
              sx={{ fontSize: 20, padding: 1, cursor: "pointer" }}
            />
            <EmailTwoToneIcon
              sx={{ fontSize: 20, padding: 1, cursor: "pointer" }}
            />
          </Box>
          <img
            src={icons.linkedinIcon}
            alt="linkedin"
            height={36}
            width={32}
            style={{
              paddingLeft: 15,
              borderLeft: "1px solid #f5f5f5",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box my={2}>
          <Typography sx={{ color: "#303030" }} component={"span"}>
            {person?.current_title}
          </Typography>
          <Typography
            sx={{
              color: "#a5a5a5",
              "&:before": {
                content: '"• "',
                color: "#cccc",
              },
            }}
            mx={3}
            component={"span"}
          >
            {person?.location}
          </Typography>
        </Box>
        <Divider />
        <Box my={2} sx={{ display: "flex" }}>
          <Box py={3}>
            <Typography
              component={"p"}
              sx={{ fontStyle: "italic", color: "#303030" }}
            >
              Experience
            </Typography>
          </Box>
          <Box p={3}>
            {person?.experience?.map((experience) => (
              <>
                <Typography
                  sx={{
                    color: "#303030",
                    "&:before": {
                      content: '"• "',
                      color: "#cccc",
                    },
                  }}
                  component={"p"}
                >
                  {experience}
                </Typography>
              </>
            ))}
          </Box>
        </Box>
        <Box my={2} sx={{ display: "flex" }}>
          <Box py={1}>
            <Typography
              component={"p"}
              sx={{ fontStyle: "italic", color: "#303030" }}
            >
              Education
            </Typography>
          </Box>
          <Box py={1} px={4}>
            {person?.education?.map((education) => (
              <Typography
                sx={{
                  color: "#303030",
                  "&:before": {
                    content: '"• "',
                    color: "#cccc",
                  },
                }}
                component={"p"}
              >
                {education}
              </Typography>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  ));
};
