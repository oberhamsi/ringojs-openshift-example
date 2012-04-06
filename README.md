### This is just a proof of concept.

Running on OpenShift
----------------------------

Create an account at http://openshift.redhat.com/

Create a DIY application:

    rhc-app create -a foobar -t diy-0.1

Add this upstream repo

    cd foobar
    git remote add upstream -m master git://github.com/oberhamsi/ringojs-openshift-example.git
    git pull -s recursive -X theirs upstream master

Then push the repo upstream

    git push

That's it, you can now checkout your application at:

    http://foobar-$YOURNAMESPACE.rhcloud.com/
