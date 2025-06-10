package com.example.singlefilexml;

import android.app.Activity;
import android.os.Bundle;
import android.util.Xml;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import java.io.StringReader;
import org.xmlpull.v1.XmlPullParser;

public class MainActivity extends Activity {
    // Embedded XML layout as a Java 15+ text block (triple double quotes)
    private static final String XML_LAYOUT = """
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical"
            android:gravity="center">
            <TextView
                android:id="@+id/hello_text"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Hello from XML String!"
                android:textSize="24sp" />
        </LinearLayout>
        """;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        try {
            XmlPullParser parser = Xml.newPullParser();
            parser.setInput(new StringReader(XML_LAYOUT));
            // Advance to first START_TAG
            int eventType;
            do {
                eventType = parser.next();
            } while (eventType != XmlPullParser.START_TAG && eventType != XmlPullParser.END_DOCUMENT);

            LayoutInflater inflater = LayoutInflater.from(this);
            View root = inflater.inflate(parser, null);
            setContentView(root);

            TextView tv = root.findViewById(R.id.hello_text);
            tv.setText("Updated text from Java!");
        } catch (Exception e) {
            // fallback in case of error
            TextView tv = new TextView(this);
            tv.setText("Failed to load XML: " + e.getMessage());
            setContentView(tv);
        }
    }
}