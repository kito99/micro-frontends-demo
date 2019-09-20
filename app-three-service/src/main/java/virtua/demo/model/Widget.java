package virtua.demo.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public class Widget implements Serializable {

    private static final long serialVersionUID = 1613955265044592029L;

    private String name;
    private LocalDate createdDate;
    private int size;
    private boolean inspected;
    private boolean approved;
    private String color;
    private int unitsSold;
    private List<Widget> relatedWidgets;

    public Widget() {
        setCreatedDate(LocalDate.now());
    }

    public Widget(String name, int size, boolean approved) {
        setName(name);
        setSize(size);
        setApproved(approved);
        setCreatedDate(LocalDate.now());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isInspected() {
        return inspected;
    }

    public void setInspected(boolean inspected) {
        this.inspected = inspected;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getUnitsSold() {
        return unitsSold;
    }

    public void setUnitsSold(int unitsSold) {
        this.unitsSold = unitsSold;
    }

    public void setRelatedWidgets(List<Widget> relatedWidgets) {
        this.relatedWidgets = relatedWidgets;
    }

    public List<Widget> getRelatedWidgets() {
        return relatedWidgets;
    }

}

