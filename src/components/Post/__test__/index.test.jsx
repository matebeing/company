import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../../theme/theme";
import { render, screen } from "@testing-library/react";
import Post from "../index.jsx";

const Component = ({ title, content, category, thumbnail, publishedAt }) => {
    return (
        <Router>  
            <ThemeProvider theme={theme}>
                <Post title={title} content={content} category={category} thumbnail={thumbnail} publishedAt={publishedAt} />
            </ThemeProvider>
        </Router>
    );
};

describe("Post", () => {
    it("should read post title", () => {
        render(<Component title="lorem" content="ipsum" category="dolor" thumbnail="x" publishedAt="00" />);
        const category = screen.getByText("lorem");
        expect(category).toBeInTheDocument();
    });

    it("should read post content", () => {
        render(<Component title="lorem" content="ipsum" category="dolor" thumbnail="x" publishedAt="00" />);
        const category = screen.getByText("ipsum");
        expect(category).toBeInTheDocument();
    });

    it("should read post category", () => {
        render(<Component title="lorem" content="ipsum" category="dolor" thumbnail="x" publishedAt="00" />);
        const category = screen.getByText("dolor");
        expect(category).toBeInTheDocument();
    });

    // it.only("should read post thumbnail", () => {
    //     render(<Component title="lorem" content="ipsum" category="dolor" thumbnail="x" publishedAt="00" />);
    //     const category = screen.getBy
    //     expect(category).toBeInTheDocument();
    // });

    it("should read post content", () => {
        render(<Component title="lorem" content="ipsum" category="dolor" thumbnail="x" publishedAt="00" />);
        const category = screen.getByText("00");
        screen.debug();

        expect(category).toBeInTheDocument();
    });
});

