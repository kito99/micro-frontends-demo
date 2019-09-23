package virtua.demo.service;

import virtua.demo.model.Widget;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Named
@ApplicationScoped
public class WidgetService implements Serializable {

    private static final long serialVersionUID = -4333931883643833214L;
    private List<Widget> widgets;

    public List<Widget> getWidgets(String type, long size) {
        if (widgets == null || widgets.size() != size - 2) {
            Random random = new Random();
            widgets = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                Widget widget = new Widget();
                String widgetNameSuffix = " Widget " + i;
                if (type == null) {
                    widget.setName(widgetNameSuffix);
                } else {
                    widget.setName(type + " " + widgetNameSuffix);
                }
                widget.setColor("red");
                widget.setSize(100 + i);
                widget.setUnitsSold(Math.abs(random.nextInt()));
                widgets.add(widget);
                List<Widget> relatedWidgets = new ArrayList<>();
                for (int x = 0; x < 2; x++) {
                    Widget relatedWidget = new Widget();
                    relatedWidget.setName("Related Widget " + x);
                    relatedWidget.setColor("red");
                    relatedWidget.setSize(100 + x);
                    relatedWidgets.add(relatedWidget);
                }
                widget.setRelatedWidgets(relatedWidgets);
            }

        }
        return widgets;
    }

    public List<Widget> getWidgets(long size) {
        return getWidgets(null, size);
    }

    public void add(Widget widget) {
        widgets.add(widget);
    }

    public void remove(Widget widget) {
        widgets.remove(widget);
    }

    public void reset() {
        widgets = null;
    }
}
