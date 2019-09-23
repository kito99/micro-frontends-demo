package virtua.demo;

import org.eclipse.microprofile.metrics.Counter;
import org.eclipse.microprofile.metrics.annotation.Metric;
import virtua.demo.model.Widget;
import virtua.demo.service.WidgetService;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

@Path("/widgets")
@Singleton
public class WidgetController {

    @Inject
    @Metric(name = "counter")
    private Counter counter;

    @Inject
    private WidgetService widgetService;

    @GET
    public List<Widget> widgets() {
        counter.inc();
        return widgetService.getWidgets(100);
    }
}
