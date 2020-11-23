import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";
import EmbedIndex from "../routes/embedIndex";

describe("Initial Test of the embed index page", () => {
    test("renders 3 nav items", () => {
        const embedId = "some-embed-id";
        const context = shallow(<EmbedIndex embedId={embedId}/>);
        expect(context.find("div").text()).toContain("Embed Index page");
        expect(context.find("div").text()).toContain(embedId);
    });
});
