import { withBlogsListPage } from "./withBlogsListPage";
import { BlogsListPage } from "./BlogsListPage";

const ConnectedBlogsListPage = withBlogsListPage(BlogsListPage);

export { ConnectedBlogsListPage as BlogsListPage };
