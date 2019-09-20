package virtua.demo;

import virtua.demo.model.Widget;
import virtua.demo.service.WidgetService;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

/**
 *
 */
@Path("/widgets")
@Singleton
public class WidgetController {

    @Inject
    private WidgetService widgetService;

    @GET
    public List<Widget> widgets() {
        return widgetService.getWidgets(100);
    }
}
