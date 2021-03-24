import { withBlogsCreatePage } from "./withBlogsCreatePage";
import { BlogsCreatePage } from "./BlogsCreatePage";

const ConnectedBlogsCreatePage = withBlogsCreatePage(BlogsCreatePage);

export { ConnectedBlogsCreatePage as BlogsCreatePage };
